import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.195 5.89c.313-.43.899-.507 1.29-.156l3.75 2.891A9.3 9.3 0 0 1 7.5 6.867c3.086-1.797 6.875-1.797 10 0 3.086 1.758 5 5.078 5 8.633a10.15 10.15 0 0 1-1.602 5.43l3.711 2.93c.43.312.508.898.157 1.288-.313.43-.899.508-1.29.157L.353 7.18c-.43-.313-.508-.899-.157-1.29M2.5 15.5c0-1.29.234-2.54.703-3.71l7.89 6.25a4.98 4.98 0 0 0-4.218 2.5A7.59 7.59 0 0 0 12.461 23a7.4 7.4 0 0 0 3.71-.977l2.11 1.641c-.273.195-.547.352-.82.508-3.086 1.797-6.875 1.797-10 0C4.375 22.375 2.5 19.094 2.5 15.5m7.383-3.203 4.258 3.32a2.9 2.9 0 0 0 .78-.898c.509-.86.509-1.914 0-2.813a2.87 2.87 0 0 0-2.46-1.406c-.977 0-1.914.547-2.422 1.406a1.2 1.2 0 0 0-.156.39' />
    </g>
    <defs>
      <clipPath id='fd1d0a68bb4e3f2542aa037fec93698b__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashLgFillIcon);
export default ForwardRef;
