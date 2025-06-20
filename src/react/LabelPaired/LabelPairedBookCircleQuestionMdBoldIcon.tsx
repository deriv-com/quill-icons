import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionMdBoldIcon = (
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
      <path d='M0 6.75C0 5.25 1.219 4 2.75 4h9.5c.938 0 1.75.813 1.75 1.75v4.469c-.562.156-1.062.375-1.5.687V5.75a.27.27 0 0 0-.25-.25h-9.5c-.719 0-1.25.563-1.25 1.25v8.469a2.5 2.5 0 0 1 1-.219H10v.5c0 .344.031.688.063 1H2.5c-.562 0-1 .469-1 1 0 .563.438 1 1 1h8.375a5.1 5.1 0 0 0 1.438 1.5H2.5A2.47 2.47 0 0 1 0 17.5V6.75m4 1.5a.74.74 0 0 1 .75-.75h5.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-5.5A.72.72 0 0 1 4 8.25m0 2.5a.74.74 0 0 1 .75-.75h5.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-5.5a.72.72 0 0 1-.75-.75m7 4.75c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m2.5-1.437v.187c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-.187c0-.157.125-.313.281-.313h1.281a.47.47 0 0 1 .438.438c0 .187-.094.312-.25.406l-1 .5a.55.55 0 0 0-.25.469V16c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-.156l.719-.375c.468-.25.781-.75.781-1.281 0-.782-.656-1.407-1.437-1.407H14.78c-.719 0-1.281.563-1.281 1.281m1.25 3.687c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75' />
    </g>
    <defs>
      <clipPath id='99650980446c7e42f94666c343dca6cc__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionMdBoldIcon);
export default ForwardRef;
