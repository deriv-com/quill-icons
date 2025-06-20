import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashMdBoldIcon = (
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
      <path d='M1.188 4.188 5.813 7.78C6.53 6.688 7.656 5.875 9 5.625V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.813c0 1.406.469 2.78 1.344 3.906l.468.562c.157.219.22.5.125.719l2.75 2.188c.344.25.407.718.125 1.03-.25.345-.718.407-1.03.126l-18.5-14.5c-.344-.25-.407-.719-.126-1.032.25-.343.719-.406 1.032-.125M7 8.718l7.063 5.532a7.7 7.7 0 0 1-.563-2.937V10.5C13.5 8.594 11.906 7 10 7a3.45 3.45 0 0 0-3 1.719M12.688 17H3.75a.74.74 0 0 1-.687-.406.78.78 0 0 1 .093-.813l.469-.562C4.5 14.094 5 12.719 5 11.313v-.344l1.438 1.125A7.7 7.7 0 0 1 5.25 15.5h5.531zM12 18c0 .531-.219 1.063-.594 1.438A1.96 1.96 0 0 1 10 20c-.531 0-1.062-.187-1.437-.562C8.187 19.063 8 18.53 8 18h4' />
    </g>
    <defs>
      <clipPath id='00fc87346d7ed3d8a0aa6714c9b3218b__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashMdBoldIcon);
export default ForwardRef;
