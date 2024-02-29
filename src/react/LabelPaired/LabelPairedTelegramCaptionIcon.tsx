import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 3.688q1.617.022 2.93.796a5.8 5.8 0 0 1 2.086 2.086q.772 1.313.797 2.93-.024 1.617-.797 2.93a5.8 5.8 0 0 1-2.086 2.086q-1.313.772-2.93.797-1.617-.024-2.93-.797A5.8 5.8 0 0 1 .984 12.43Q.212 11.117.188 9.5.21 7.883.984 6.57A5.8 5.8 0 0 1 3.07 4.484Q4.383 3.712 6 3.688m2.695 3.96v-.234a.35.35 0 0 0-.093-.164.45.45 0 0 0-.235-.07q-.117 0-.562.164-.423.14-1.594.633-.844.35-3.399 1.453-.398.164-.421.328 0 .234.492.351.07 0 .14.024.211.094.47.14.257.07.421.07.281.024.633-.21 2.367-1.617 2.46-1.64.048-.024.118.023.048.07.023.093-.046.118-.515.54-.445.444-.82.796-.236.187-.258.235l-.14.14q-.235.188-.282.375-.07.164.281.422.351.21.633.399.28.21.68.468l.187.141q.352.282.727.281.258.024.398-.586l.234-1.336q.141-.795.258-1.57.117-.797.164-1.266' />
    </g>
    <defs>
      <clipPath id='17e2e4519527a756a13dbd3c901642f9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramCaptionIcon);
export default ForwardRef;
