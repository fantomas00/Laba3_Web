import React, { useState } from 'react';
import '../style/style.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import calculateExpression from "./utils";

const Calc = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const calculatedResult = eval(expression);
                setResult(calculatedResult.toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'all-clear') {
            setExpression('');
            setResult('');
        } else {
            setExpression(prevExpression => prevExpression + value);
        }
    };

    return (
        <>
        <NavBar />
        <div className="container-fluid">
            <div className="bg-image">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8" style={{
                        backgroundColor: 'rgb(123, 206, 160)',
                        marginBottom: '20px',
                        marginTop: '20px',
                        height: '78.8vh'
                    }}>
                        <div className="h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                    <div className="card align-items-center  rounded" style={{ maxWidth: '250px', margin: '0 auto' }}>
                                        <div className="card-body" style={{backgroundColor: 'rgb(9, 110, 0)'}}>
                                            <div className="container-fluid border rounded p-10">
                                                <div className="row flex-fill no-gutters">
                                                    <div className="col-12  rounded">
                                                        <input type="text" value="" style={{width: '100%'}} disabled/>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" className="btn btn-dark flex-grow-1"
                                                                onClick={() => handleButtonClick('+')}>+
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" className="btn btn-dark flex-grow-1"
                                                                value="-">-
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" className="btn btn-dark flex-grow-1"
                                                                value="*">&times;</button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" className="btn btn-dark flex-grow-1"
                                                                value="/">&divide;</button>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="7"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('7')}>7
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="8"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('8')}>8
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="9"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('9')}>9
                                                        </button>
                                                    </div>
                                                    <div className="col-3"></div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="4"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('4')}>4
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="5"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('5')}>5
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="6"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('6')}>6
                                                        </button>
                                                    </div>
                                                    <div className="col-xs-3"></div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="1"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('1')}>1
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="2"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('2')}>2
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="3"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('3')}>3
                                                        </button>
                                                    </div>
                                                    <div className="col-3"></div>
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" value="0"
                                                                className="btn btn-success flex-grow-1"
                                                                style={{height: '100%'}}
                                                                onClick={() => handleButtonClick('0')}>0
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex flex-grow-1">
                                                        <button type="button" className="btn btn-dark flex-grow-1"
                                                                style={{height: '100%'}} value=".">.
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button"
                                                                className="btn btn-success btn-sm flex-grow-1"
                                                                style={{height: '100%'}} value="all-clear"
                                                                onClick={() => handleButtonClick('all-clear')}>AC
                                                        </button>
                                                    </div>
                                                    <div className="col-3  rounded d-flex">
                                                        <button type="button" className="btn btn-primary flex-grow-1"
                                                                style={{height: '100%'}} value="="
                                                                onClick={() => handleButtonClick('=')}>=
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>

        </>
    );
};

export default Calc;
