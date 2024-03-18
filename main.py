from flask import Flask, Response
import time
from flask_cors import cross_origin
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/stream-sse',methods=['POST'])
@cross_origin()
def stream():
    def generate():
        for i in range(10):
            yield f"{'name':'张三'}"
            time.sleep(1)

# @app.after_request
# def func_res(resp):     
#     res = make_response(resp)
#     res.headers['Access-Control-Allow-Origin'] = '*'
#     res.headers['Access-Control-Allow-Methods'] = 'GET,POST'
#     res.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
#     return res

if __name__ == '__main__':
    app.run(threaded=True)