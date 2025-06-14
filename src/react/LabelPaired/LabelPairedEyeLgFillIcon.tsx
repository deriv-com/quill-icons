import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 6.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117s-4.375 3.125-7.5 3.125c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C5.797 8.195 8.336 6.75 11.5 6.75M5.875 15.5a5.6 5.6 0 0 0 2.813 4.883c1.718 1.015 3.867 1.015 5.624 0 1.72-1.016 2.813-2.852 2.813-4.883 0-1.992-1.094-3.828-2.812-4.844-1.758-1.015-3.907-1.015-5.626 0A5.58 5.58 0 0 0 5.876 15.5M11.5 13c0-.273-.078-.508-.156-.781-.078-.196.078-.469.312-.469a3.77 3.77 0 0 1 3.438 2.813c.547 1.992-.625 4.023-2.656 4.57a3.72 3.72 0 0 1-4.57-2.656 3 3 0 0 1-.118-.782c-.04-.234.234-.39.43-.312.273.078.508.117.82.117 1.367 0 2.5-1.094 2.5-2.5' />
    </g>
    <defs>
      <clipPath id='2752c977887d2ece1f24837c09f2360d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeLgFillIcon);
export default ForwardRef;
