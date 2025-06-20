import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 7.5c-.844 0-1.5.703-1.5 1.5v10.5h12V21H1.547c.281.89 1.078 1.5 2.016 1.5H16.5V24H3.563A3.56 3.56 0 0 1 0 20.438c0-.516.375-.938.89-.938H3V9c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v1.5h-1.5V9c0-.797-.703-1.5-1.5-1.5zm13.5 6.75v13.5c0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75v-13.5c0-.375-.375-.75-.75-.75h-7.5c-.422 0-.75.375-.75.75m-1.5 0A2.25 2.25 0 0 1 20.25 12h7.5c1.219 0 2.25 1.031 2.25 2.25v13.5A2.25 2.25 0 0 1 27.75 30h-7.5A2.22 2.22 0 0 1 18 27.75z' />
    </g>
    <defs>
      <clipPath id='126520294a44fe36f767ec15b53bab25__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileXlRegularIcon);
export default ForwardRef;
