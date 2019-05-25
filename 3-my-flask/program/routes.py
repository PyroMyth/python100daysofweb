from program import app
from flask import render_template, request


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/games')
def games():
    return render_template('games.html')


@app.route('/search')
def search():
    return render_template('search.html', form=[], results=[])


@app.route('/searchgames', methods=['POST'])
def searchgames():
    print(request, '\n')
    print(request.form, '\n')
    print(request.form.items, '\n')
    for key in request.form:
        print(key, request.form[key], '\n')
    form = request.form
    return render_template('search.html', form=form, results=form)
