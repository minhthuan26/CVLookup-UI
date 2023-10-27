import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import banner from '~/assets/banner.png'
export const WrapSearch = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #eee;
    width: 100%;
    height: 200px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

export const SearchBox = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
`

export const InputSearch = styled.input`
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: #22a6b3;
    padding-right: 40px;
    color: #fff;
    &::placeholder {
        color: #0d0053;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 100;
    }

    &:focus {
        width: 444px;
        border-radius: 10px;
        background-color: #2193d1aa;
        border-bottom: 1px solid #0d0053;
        transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    }
`

export const BtnSearch = styled.button`
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0;
    color: #0d0053;
    background-color: transparent;
    pointer-events: painted;

    &:focus ~ ${InputSearch} {
        width: 400px;
        border-radius: 10px;
        background-color: #84b9d5aa;
        border-bottom: 1px solid #0d0053;
        transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    }
`

const Text = styled.div`
    h2 {
        color: #004773;
        font-weight: bold;
    }
`

const HighlightedText = styled.span`
    color: #6e90ff;
    -webkit-text-stroke: 0.6px #0d045e;
`

export const SearchBarItem = () => {
    return (
        <Text>
            <h2>
                Giúp cho bạn
                <HighlightedText>
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
                </HighlightedText>
            </h2>
        </Text>
    )
}
