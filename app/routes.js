//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


function required(value) {
  return value && value.trim() !== ''
}

router.post('/question1', function (req, res) {
  const errors = []

  if (!required(req.session.data.fullName)) {
    errors.push({
      text: 'Enter your full name',
      href: '#fullName'
    })
  }

  if (!required(req.session.data.staffId)) {
    errors.push({
      text: 'Enter your staff ID',
      href: '#staffId'
    })
  }

  if (!required(req.session.data.email)) {
    errors.push({
      text: 'Enter your email address',
      href: '#email'
    })
  }

  if (errors.length) {
    res.render('question1', {
      errors
    })
  } else {
    res.redirect('/question2')
  }
})

router.post('/question2', function (req, res) {
  if (!required(req.session.data.expenseType)) {
    res.render('question2', {
      errors: [
        {
          text: 'Select what type of lunch expense you are claiming for',
          href: '#expenseType'
        }
      ]
    })
  } else {
    res.redirect('/question3')
  }
})

router.post('/question3', function (req, res) {
  const errors = []

  if (!required(req.session.data.expenseDateDay)) {
    errors.push({
      text: 'Enter the day the lunch expense was paid',
      href: '#expenseDate-day'
    })
  }

  if (!required(req.session.data.expenseDateMonth)) {
    errors.push({
      text: 'Enter the month the lunch expense was paid',
      href: '#expenseDate-month'
    })
  }

  if (!required(req.session.data.expenseDateYear)) {
    errors.push({
      text: 'Enter the year the lunch expense was paid',
      href: '#expenseDate-year'
    })
  }

  if (errors.length) {
    res.render('question3', {
      errors
    })
  } else {
    res.redirect('/question4')
  }
})

router.post('/question4', function (req, res) {
  const errors = []

  if (!required(req.session.data.lunchItems)) {
    errors.push({
      text: 'Enter what you bought for lunch',
      href: '#lunchItems'
    })
  }

  if (!required(req.session.data.lunchCost)) {
    errors.push({
      text: 'Enter how much the lunch cost',
      href: '#lunchCost'
    })
  }

  if (errors.length) {
    res.render('question4', {
      errors
    })
  } else {
    res.redirect('/upload')
  }
})

router.post('/upload', function (req, res) {
  res.redirect('/checkanswers')
})

router.post('/checkanswers', function (req, res) {
  res.redirect('/confirmation')
})