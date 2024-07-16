import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 21.75H3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h5.703l-7.851-7.852a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l7.891 7.851V11.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25' />
    </g>
    <defs>
      <clipPath id='0b68124003750638914021f378cd050c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightLgFillIcon);
export default ForwardRef;
