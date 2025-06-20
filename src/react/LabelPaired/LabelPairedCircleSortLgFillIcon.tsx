import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.43-6.055a.66.66 0 0 0-.899 0l-3.75 3.75c-.156.196-.234.47-.117.703.078.196.313.352.586.352h7.5c.234 0 .469-.117.547-.352.117-.234.039-.507-.117-.703zM9.53 21.594a.66.66 0 0 0 .899 0l3.75-3.75c.156-.196.234-.469.117-.703a.59.59 0 0 0-.547-.391h-7.5c-.273 0-.508.156-.586.39-.117.235-.039.508.117.704z' />
    </g>
    <defs>
      <clipPath id='490e445333971a81282ba7791f0a657a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortLgFillIcon);
export default ForwardRef;
