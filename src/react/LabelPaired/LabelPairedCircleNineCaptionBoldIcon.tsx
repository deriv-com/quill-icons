import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineCaptionBoldIcon = (
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
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6-1.875c-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124a1.122 1.122 0 0 0 1.945 0c.21-.328.21-.773 0-1.124-.211-.329-.563-.563-.961-.563m-.61 3.305a2.264 2.264 0 0 1-1.64-2.18 2.25 2.25 0 0 1 4.5 0c0 .773-.352 1.5-.914 1.992l-1.922 1.64a.584.584 0 0 1-.797-.07.584.584 0 0 1 .07-.796z' />
    </g>
    <defs>
      <clipPath id='4ebebf001f39b4450709b8fe0cf13858__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineCaptionBoldIcon);
export default ForwardRef;
