import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7.531q.195-.742.938-.781h8.124q.86.078.938.938-.079.858-.937.937H3.218l-.899 5.313h5.274q2.187.038 3.633 1.523 1.485 1.444 1.523 3.633-.04 2.187-1.523 3.633Q9.78 24.21 7.594 24.25H3.883q-1.094 0-1.992-.547A3.53 3.53 0 0 1 .523 22.18l-.195-.313q-.273-.82.43-1.289.82-.273 1.25.43l.195.312q.548 1.016 1.68 1.055h3.71q1.407-.04 2.305-.977.938-.899.977-2.304-.04-1.407-.977-2.305-.899-.937-2.304-.977H1.188a.85.85 0 0 1-.704-.351.95.95 0 0 1-.234-.742z' />
    </g>
    <defs>
      <clipPath id='e1483fb8966c4efeb345796bfcba9f79__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveLgBoldIcon);
export default ForwardRef;
