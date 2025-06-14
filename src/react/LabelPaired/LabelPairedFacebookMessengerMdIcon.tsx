import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMessengerMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4.25c4.375 0 7.75 3.219 7.75 7.531 0 5.469-5.219 8.532-10 7.219-.281-.062-.312 0-1.937.719-.22.062-.438.062-.594-.063-.188-.093-.281-.281-.281-.5-.063-1.437 0-1.562-.25-1.812C1.156 16 .25 14.03.25 11.78.25 7.47 3.625 4.25 8 4.25m4.656 5.813c.219-.344-.187-.75-.531-.5l-2.437 1.843c-.188.125-.407.125-.563 0l-1.812-1.344c-.282-.187-.594-.28-.907-.218-.343.062-.625.25-.781.531l-2.281 3.594c-.219.344.187.75.531.5l2.438-1.844c.187-.125.406-.125.562 0l1.813 1.344c.28.187.593.281.937.219.313-.063.594-.25.75-.532z' />
    </g>
    <defs>
      <clipPath id='1d934635bc2896d79c79e2a5e56e5963__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMessengerMdIcon);
export default ForwardRef;
