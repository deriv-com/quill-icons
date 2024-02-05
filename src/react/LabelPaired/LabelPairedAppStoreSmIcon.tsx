import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7 7.059-.246-.438q-.3-.41-.766-.191-.41.3-.191.765l.547.985-1.805 3.144H3.117q-.52.055-.574.574.054.492.574.547h5.059a.76.76 0 0 0 0-.738q-.191-.356-.63-.383H5.825l2.38-4.129q.217-.465-.192-.765-.465-.219-.766.191zm-2.16 5.96q-.437-.519-1.094-.328l-.41.711q-.219.465.219.739.465.219.765-.192zm4.62-1.695a4 4 0 0 1-.136-.246A196 196 0 0 0 7.82 8.48q-.273.219-.41.739-.11.546.219 1.148.328.575.793 1.395.547.93 1.258 2.187.3.411.765.192.41-.274.22-.766l-.548-.93h.793q.52-.054.574-.547-.054-.519-.574-.574zM7 3.97q1.887.027 3.418.93a6.77 6.77 0 0 1 2.434 2.433q.902 1.53.93 3.418-.028 1.887-.93 3.418a6.8 6.8 0 0 1-2.434 2.434q-1.53.901-3.418.93-1.887-.029-3.418-.93a6.77 6.77 0 0 1-2.434-2.434q-.901-1.53-.93-3.418.028-1.887.93-3.418a6.77 6.77 0 0 1 2.434-2.434q1.53-.901 3.418-.93m5.906 6.781q-.054-2.516-1.722-4.184Q9.489 4.898 7 4.844q-2.516.054-4.184 1.722-1.668 1.695-1.722 4.184.054 2.516 1.722 4.184Q4.511 16.602 7 16.656q2.516-.054 4.184-1.722 1.668-1.695 1.722-4.184' />
    </g>
    <defs>
      <clipPath id='5e3788b61881377b758c1b4e8fc6cc64__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreSmIcon);
export default ForwardRef;
