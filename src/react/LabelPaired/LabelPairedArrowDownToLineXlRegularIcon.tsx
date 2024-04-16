import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 28.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h16.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75zm8.766-4.687c-.282.28-.797.28-1.078 0l-6-6c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L8.25 21.47V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v13.219l4.688-4.735c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078z' />
    </g>
    <defs>
      <clipPath id='3c17734031bdc8b6ef39511b8f16009d__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlRegularIcon);
export default ForwardRef;
