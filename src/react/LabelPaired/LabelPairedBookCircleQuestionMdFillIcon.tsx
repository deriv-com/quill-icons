import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7a3 3 0 0 1 3-3h10c.531 0 1 .469 1 1v5.219c-2.312.656-4 2.781-4 5.281v.5H3c-.562 0-1 .469-1 1 0 .563.438 1 1 1h7.594c.406.813 1 1.5 1.719 2H3a3 3 0 0 1-3-3zm4 1.5c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-6c-.281 0-.5.25-.5.5m0 2c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-6c-.281 0-.5.25-.5.5m7 5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m2.5-1.437v.187c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-.187c0-.157.125-.313.281-.313h1.281a.47.47 0 0 1 .438.438c0 .187-.094.312-.25.406l-1 .5a.55.55 0 0 0-.25.469V16c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-.156l.719-.375c.468-.25.781-.75.781-1.281 0-.782-.656-1.407-1.437-1.407H14.78c-.719 0-1.281.563-1.281 1.281m1.25 3.687c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75' />
    </g>
    <defs>
      <clipPath id='8ee0c597f9caa15bb19f49d331ab909d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionMdFillIcon);
export default ForwardRef;
