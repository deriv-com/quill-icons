import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.016 7.734 4.5 4.5c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L8.25 10.078V27.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V10.078l-3.234 3.235c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.5-4.5c.28-.28.796-.28 1.078 0M16.5 19.5h6c.281 0 .516.188.656.469a.64.64 0 0 1-.093.75L18.047 27H22.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6q-.492 0-.703-.422c-.14-.234-.094-.562.094-.797L20.906 21H16.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m3-12c.281 0 .516.188.656.422l3 6v.047l.75 1.453a.77.77 0 0 1-.328 1.031.77.77 0 0 1-1.031-.328L22.03 15h-5.11l-.515 1.125a.77.77 0 0 1-1.031.328c-.328-.187-.516-.656-.328-1.031l.75-1.453v-.047l3-6c.14-.234.375-.422.703-.422m-1.828 6h3.61L19.5 9.938z' />
    </g>
    <defs>
      <clipPath id='6ff8e84a927aec61f747acac4ed55d57__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlRegularIcon);
export default ForwardRef;
