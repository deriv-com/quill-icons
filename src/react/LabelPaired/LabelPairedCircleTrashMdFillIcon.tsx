import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5 8c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H9.688l-.344-.344A.5.5 0 0 0 9 7.5H7a.52.52 0 0 0-.375.156L6.281 8zm0 2 .406 5.094c.032.531.469.906 1 .906h3.157c.53 0 .968-.375 1-.906L11 10z' />
    </g>
    <defs>
      <clipPath id='fa78699ce55997bbd43a91a486947023__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashMdFillIcon);
export default ForwardRef;
