import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodSpeiWhiteIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path d='M16.723 45.498 6 46.17q.472 5.523 4.056 9.106 3.582 3.583 12.887 3.583 5.299 0 8.783-1.518 3.483-1.543 5.424-4.503 1.94-2.96 1.94-6.469 0-2.985-1.467-5.399-1.443-2.413-4.653-4.03-3.185-1.642-10.574-3.235-2.985-.622-3.782-1.343-.82-.697-.82-1.568-.001-1.194.994-2.015.995-.846 2.961-.846 2.388 0 3.732 1.12 1.369 1.119 1.791 3.582l10.624-.622q-.696-5.672-4.379-8.26-3.657-2.613-10.648-2.612-5.698 0-8.982 1.443-3.26 1.418-4.901 3.93-1.618 2.49-1.618 5.3 0 4.28 3.185 7.041 3.16 2.762 10.574 4.429 4.529.995 5.772 2.115 1.245 1.119 1.244 2.538 0 1.493-1.318 2.637-1.295 1.12-3.707 1.12-3.235 0-4.976-2.215-1.07-1.369-1.419-3.98' />
      <path
        fillRule='evenodd'
        d='M60.676 21.763H41.94v36.474h11.32V44.702h6.17q6.819 0 10.127-3.11 3.334-3.11 3.334-8.633 0-5.375-3.06-8.285-3.036-2.911-9.156-2.911m-4.653 15.55h-2.761v-8.136h3.21q3.159 0 4.303 1.194t1.145 2.911q0 1.767-1.319 2.911-1.319 1.12-4.578 1.12'
        clipRule='evenodd'
      />
      <path d='M75.7 21.763h30.205v8.836H86.996v4.748h17.541v7.09h-17.54v8.239h19.456v7.56H75.701zM122 21.763h-11.296V32.76h4.777v-7.962L122 32.319zM122 41.162l-6.519 7.52v-7.96h-4.777v17.515H122z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodSpeiWhiteIcon);
export default ForwardRef;
