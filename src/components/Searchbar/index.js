import React from 'react'
import './searchbar.css'
import Typewriter from 'typewriter-effect'
function Searchbar() {
    return (
        <div class="wrap-search">
            <div className="text">
                <h2 style={{ color: '#004773', fontWeight: 'bold' }}>
                    Giúp cho bạn
                    <span
                        style={{
                            color: '#6e90ff',
                            WebkitTextStroke: '0.6px #0d045e',
                        }}>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    'Định hướng nghề nghiệp',
                                    'Tìm kiếm việc làm mới',
                                    'Tìm công ty phù hợp',
                                    'Tạo CV mới',
                                    'Tìm việc lương cao',
                                ],
                            }}
                        />
                    </span>
                </h2>
            </div>
            <div class="search-box">
                <button class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
                <input
                    type="text"
                    class="input-search"
                    placeholder="Type to Search..."
                />
            </div>
        </div>
    )
}

export default Searchbar
