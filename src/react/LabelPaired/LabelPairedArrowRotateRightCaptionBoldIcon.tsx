import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightCaptionBoldIcon = (
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
      <path d='M11.063 8.75H7.687a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h2.109l-.633-.75c-.773-.914-1.898-1.5-3.164-1.5A4.116 4.116 0 0 0 1.875 9.5 4.1 4.1 0 0 0 6 13.625c.914 0 1.781-.305 2.46-.82a.564.564 0 0 1 .798.117c.187.258.14.61-.117.797A5.2 5.2 0 0 1 6 14.75 5.24 5.24 0 0 1 .75 9.5 5.256 5.256 0 0 1 6 4.25c1.617 0 3.07.75 4.031 1.898l.469.563V4.812c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v3.375a.555.555 0 0 1-.562.562' />
    </g>
    <defs>
      <clipPath id='65cca94ebeac905df7d03be82d48941d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightCaptionBoldIcon);
export default ForwardRef;
