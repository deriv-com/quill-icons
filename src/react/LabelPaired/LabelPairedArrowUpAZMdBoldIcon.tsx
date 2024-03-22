import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 5c.281 0 .531.188.656.438l2.5 5a.74.74 0 0 1-.343 1c-.344.187-.813.03-1-.344l-.407-.844c-.062 0-.125.031-.156.031h-2.687l-.407.813a.74.74 0 0 1-1 .344.74.74 0 0 1-.344-1l2.5-5A.77.77 0 0 1 13 5m-.687 3.75h1.343L13 7.438zM4.469 5.219a.736.736 0 0 1 1.031 0l3 3c.313.312.313.781 0 1.062a.684.684 0 0 1-1.031 0L5.75 7.562V18.25A.74.74 0 0 1 5 19a.72.72 0 0 1-.75-.75V7.563L2.531 9.28c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l3-3zM11 13h4c.281 0 .563.188.656.469a.67.67 0 0 1-.125.781l-2.875 3.25H15a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4a.72.72 0 0 1-.687-.437c-.126-.25-.094-.563.124-.813l2.876-3.25H11a.72.72 0 0 1-.75-.75A.74.74 0 0 1 11 13' />
    </g>
    <defs>
      <clipPath id='2549d709a680a35ab994f06fc23b291a__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdBoldIcon);
export default ForwardRef;
