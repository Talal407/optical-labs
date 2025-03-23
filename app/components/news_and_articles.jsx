import { Dancing_Script } from 'next/font/google';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

export default function NewsArticles() {
  return (
    <div className="bg-[#00050E] text-[#D0DCE2] p-10"> 
      <h2 className={`text-5xl text-center mb-20 ${scriptFont.className}`}>news & Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {[ 
          {
            title: 'HALLIE STERN: MCCAIN INSTITUTE',
            content: 'The McCain Institute at Arizona State University is proud to welcome Hallie Stern as the inaugural American Democracy & Technology Policy Translation Fellow.',
          },
          {
            title: 'HALLIE STERN: INTEGRITY INSTITUTE',
            content: 'Diagnosing Networked Harassment in its Connection to Online Violence Against Women in Politics.',
          },
          {
            title: 'HALLIE STERN: MCCAIN INSTITUTE',
            content: 'The McCain Institute at Arizona State University is proud to welcome Hallie Stern as the inaugural American Democracy & Technology Policy Translation Fellow.',
          },
          {
            title: 'HALLIE STERN: MCCAIN INSTITUTE',
            content: 'The McCain Institute at Arizona State University is proud to welcome Hallie Stern as the inaugural American Democracy & Technology Policy Translation Fellow.',
          },
        ].map((article, index) => (
          <div key={index} className="p-6 text-center">
            <h3 className="text-2xl font-bold text-[#4ABFBB]">{article.title}</h3>
            <hr className="my-4  border-gray-500" />
            <p className="text-lg text-[#D0DCE2]">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
