import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m15.04 21.867-3.126-3.125A3.7 3.7 0 0 1 10 19.25q-1.054 0-1.914-.508L4.96 21.867Q7.07 23.586 10 23.625q2.93-.039 5.04-1.758m2.655 0 .47.469q.546.664 0 1.328-.665.547-1.33 0l-.468-.469Q13.712 25.422 10 25.5q-3.71-.078-6.367-2.305l-.469.47q-.664.546-1.328 0-.547-.665 0-1.33l.469-.468Q.078 19.212 0 15.5q.078-3.71 2.305-6.367l-.47-.469q-.546-.664 0-1.328.665-.548 1.33 0l.468.469Q6.289 5.578 10 5.5q3.71.078 6.367 2.305l.469-.47q.664-.546 1.328 0 .547.665 0 1.33l-.469.468Q19.922 11.789 20 15.5q-.078 3.71-2.305 6.367m-1.328-1.328q1.719-2.11 1.758-5.039-.039-2.93-1.758-5.04l-3.125 3.126q.508.859.508 1.914t-.508 1.914zM15.04 9.133Q12.93 7.414 10 7.375q-2.93.039-5.04 1.758l3.126 3.125A3.7 3.7 0 0 1 10 11.75q1.054 0 1.914.508zm-8.281 8.281A3.7 3.7 0 0 1 6.25 15.5q0-1.054.508-1.914L3.633 10.46Q1.914 12.57 1.875 15.5q.039 2.93 1.758 5.04zM8.125 15.5q.04 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64-.039-1.055-.937-1.64-.938-.47-1.876 0-.898.585-.937 1.64' />
    </g>
    <defs>
      <clipPath id='79636145ad9e7a75c865d6a847423287__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingLgBoldIcon);
export default ForwardRef;
