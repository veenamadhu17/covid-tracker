import React from 'react';
import './index.scss'

const Loading:React.FC = () => {
    return (
        <div data-testid="loading_test" className="loader">
            <div className="loader_inner">
                <div className="loader_line_wrap">
                    <div className="loader_line"></div>
                </div>
                <div className="loader_line_wrap">
                    <div className="loader_line"></div>
                </div>
                <div className="loader_line_wrap">
                    <div className="loader_line"></div>
                </div>
                <div className="loader_line_wrap">
                    <div className="loader_line"></div>
                </div>
                <div className="loader_line_wrap">
                    <div className="loader_line"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;