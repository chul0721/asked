import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Index: NextPage = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const [question, setQuestion] = useState('')
  const [screen, setScreen] = useState(1)

  const sendData = async () => {
    if (question.length < 1) return alert('내용을 써')

    await fetch('/api/regist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: question })
    })

    alert('질문 등록됐음')
    router.reload()
  }

  const fetchData = async () => {
    const res = await fetch('/api/data')
    const json = await res.json()

    setData(json.data.reverse())
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="flex flex-col">
        <div className="grid justify-items-center pt-8 pb-4">
          <div className="text-3xl font-semibold">병철이의 짝퉁 에스크</div>
          <div className="grid text-sm font-mono justify-items-center -space-y-1">
            <Link href="https://github.com/chul0721/asked">
              <a target="_blank">made with ❤️ in Korea</a>
            </Link>
          </div>
        </div>
        <div className="grid justify-center space-y-3 mb-4">
          <textarea
            onChange={({ currentTarget: { value } }) => setQuestion(value)}
            placeholder="무엇이든 물어보세요!"
            className="border border-slate-100 p-3 rounded-2xl shadow-lg"
            rows={5}
            cols={35}
          ></textarea>
          <button
            className="p-3 rounded-2xl shadow-lg bg-blue-200 font-semibold text-white"
            onClick={sendData}
          >
            질문하기
          </button>
        </div>
      </div>
      <div className="grid justify-center pt-20">
        {screen === 1 && (
          <div className="grid justify-items-center">
            <div className="flex">
              <div
                onClick={() => setScreen(1)}
                className="cursor-pointer border-b px-10 md:px-20 py-2 bg-blue-200 rounded-t-lg shadow-md text-white font-semibold"
              >
                답변한 질문
              </div>
              <div
                onClick={() => setScreen(2)}
                className="cursor-pointer border-b px-10 md:px-20 py-2 font-semibold"
              >
                답변 안한 질문
              </div>
            </div>
            <div>
              {Object.entries(data).map(([_, question]: any) =>
                question.answer ? (
                  <div
                    key={question.id}
                    className="bg-blue-50 rounded-xl p-5 my-10 w-[22rem] md:w-[32rem]"
                  >
                    <div className="text-xl font-semibold">Q. {question.content}</div>
                    <div className="text-lg pt-1">&gt; {question.answer}</div>
                    <div className="font-mono text-sm text-slate-400 pt-3">
                      {question.answeredAt.slice(0, 10)}
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        )}
        {screen === 2 && (
          <div className="grid justify-items-center">
            <div className="flex">
              <div
                onClick={() => setScreen(1)}
                className="cursor-pointer border-b px-10 md:px-20 py-2 font-semibold"
              >
                답변한 질문
              </div>
              <div
                onClick={() => setScreen(2)}
                className="cursor-pointer border-b px-10 md:px-20 py-2 bg-blue-200 rounded-t-lg shadow-md text-white font-semibold"
              >
                답변 안한 질문
              </div>
            </div>
            <div>
              {Object.entries(data).map(([_, question]: any) =>
                question.answer ? (
                  <></>
                ) : (
                  <div
                    key={question.id}
                    className="bg-blue-50 rounded-xl p-5 my-10 w-[22rem] md:w-[32rem]"
                  >
                    <div className="text-xl font-semibold">Q. {question.content}</div>
                    <div className="font-mono text-sm text-slate-400 pt-3">
                      {question.answeredAt.slice(0, 10)}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Index
