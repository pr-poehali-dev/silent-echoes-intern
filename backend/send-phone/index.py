import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет номер телефона клиента на почту sorokpatsnk@gmail.com"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    phone = body.get('phone', '').strip()

    if not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Номер телефона не указан'})
        }

    gmail_user = os.environ['GMAIL_USER']
    gmail_password = os.environ['GMAIL_APP_PASSWORD']

    msg = MIMEMultipart()
    msg['From'] = gmail_user
    msg['To'] = 'sorokpatsnk@gmail.com'
    msg['Subject'] = 'Новая заявка на обратный звонок — SaniansTeamLog'

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #1e293b; margin-bottom: 8px;">📞 Новая заявка на звонок</h2>
        <p style="color: #64748b; margin-bottom: 24px;">Клиент оставил номер телефона на сайте SaniansTeamLog</p>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 16px 20px; font-size: 22px; font-weight: bold; color: #1e293b; letter-spacing: 1px;">
            {phone}
        </div>
        <p style="color: #94a3b8; font-size: 13px; margin-top: 20px;">Перезвоните в течение 15 минут</p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, 'sorokpatsnk@gmail.com', msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
