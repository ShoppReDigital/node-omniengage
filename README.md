# OmniEngage

Javascript Client SDK for OmniEngage Server

## Getting Started

You need to install OmniEngage and set API credentials before you get started

If you not installed yet, you can install using below options

1. [DigitalOcean One Click Installation](https://marketplace.digitalocean.com/apps/caprover?action=deploy&refcode=27013eb71a06)  
2. [Installing by your own](https://github.com/shoppredigital-tech/omniengage#installing-omniengage---in-5-minutes)

## Installation

```shell script
npm i @shoppredigital/omniengage -S
```

## Usage

### for building emails for developers in command line
```json
{
 "scripts": {
    "event:fire": "OMNIENGAGE_URL=https://engage.yourdomain.com ./node_modules/.bin/omniengage events",
    "email-build": "OMNIENGAGE_URL=https://engage.yourdomain.com ./node_modules/.bin/omniengage build",
    "email-update-send": "OMNIENGAGE_URL=https://engage.yourdomain.com ./node_modules/.bin/omniengage update-send",
    "email-deploy": "OMNIENGAGE_URL=https://engage.yourdomain.com DEBUG=q-* ./node_modules/.bin/omniengage deploy"
  }
}
```

##  for sending emails from nodejs

```js
if (!process.env.OMNIENGAGE_URL) {
  process.env.OMNIENGAGE_URL = 'https://engage.yourdomain.com';
}

const { ses } = require('@shoppredigital/omniengage');
const { FROM_EMAIL = 'you@example.com' } = process.env;
const customer = {
  email: 'customer@gmail.com',
};

ses.sendTemplatedEmail({
    Source: `"OmniEngage" <${FROM_EMAIL}>`,
    Destination: {
      ToAddresses: [customer.email],
    },
    Template: 'user_signup',
    TemplateData: JSON.stringify({
      customer,
    }),
  })
```

```js
const { comment, user } = require('@shoppredigital/omniengage');
// Register a user 
user.signup({
      id: userId,
      first_name: 'Vikas',
      last_name: 'Kumar',
      email: 'customer-email@gmail.com',
    });

// Sending Chat Message from Server
comment.create({
      object_id: 1,
      user_id: userId,
      state_id: 1,
      comments: 'Lead Completed',
    }, 'leads')
```

