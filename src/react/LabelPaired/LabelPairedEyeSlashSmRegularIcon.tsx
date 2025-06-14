import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.934 3.86 16.652 13.124c.164.137.219.438.055.602a.41.41 0 0 1-.602.082L.414 4.543c-.191-.137-.246-.438-.082-.602.137-.191.438-.246.602-.082m15.859 7.246a10.3 10.3 0 0 1-1.477 2.433l-.683-.547A10 10 0 0 0 16 10.75c-.383-.875-1.176-2.187-2.352-3.281S10.914 5.5 9 5.5c-1.094 0-2.078.3-2.926.738l-.738-.601C6.375 5.035 7.578 4.625 9 4.625c2.188 0 3.965 1.012 5.25 2.215 1.285 1.176 2.133 2.598 2.543 3.582a.98.98 0 0 1 0 .683M2.656 7.987l.684.547A8.8 8.8 0 0 0 2 10.75c.355.875 1.148 2.188 2.324 3.281C5.5 15.125 7.06 16 9 16c1.066 0 2.05-.273 2.898-.71l.739.6A7.07 7.07 0 0 1 9 16.876c-2.215 0-3.992-.984-5.277-2.187-1.285-1.204-2.133-2.626-2.543-3.583a.98.98 0 0 1 0-.683c.273-.656.765-1.559 1.476-2.434M9 14.25a3.49 3.49 0 0 1-3.5-3.5c0-.164 0-.328.027-.492l.848.656A2.613 2.613 0 0 0 9 13.375c.137 0 .3 0 .438-.027l.847.656c-.41.164-.848.246-1.285.246m3.5-3.5v.027c0 .164-.027.329-.055.493l-.847-.657A2.59 2.59 0 0 0 9 8.153c-.164 0-.328 0-.465.027l-.848-.657A3.5 3.5 0 0 1 9 7.25c1.914 0 3.5 1.586 3.5 3.5' />
    </g>
    <defs>
      <clipPath id='78084fda0af71d95ff923bfef249ae4b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashSmRegularIcon);
export default ForwardRef;
