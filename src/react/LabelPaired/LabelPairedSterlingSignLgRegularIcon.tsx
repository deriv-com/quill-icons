import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 11.438V15.5h6.25q.585.039.625.625-.039.585-.625.625h-6.25A15.3 15.3 0 0 1 1.891 23h10.234q.585.039.625.625-.039.585-.625.625H.875a.61.61 0 0 1-.547-.312.66.66 0 0 1 0-.625l.04-.079a14.55 14.55 0 0 0 1.757-6.484H.875q-.585-.039-.625-.625.039-.585.625-.625h1.25v-4.062q.04-1.993 1.367-3.32 1.329-1.329 3.32-1.368h.274q.781 0 1.484.234l3.125 1.055q.51.235.39.781-.233.547-.78.39L8.18 8.196A3.2 3.2 0 0 0 7.086 8h-.274q-1.444.04-2.421 1.016t-1.016 2.422' />
    </g>
    <defs>
      <clipPath id='5523deccb9898cabe6a84c8ee2b16373__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignLgRegularIcon);
export default ForwardRef;
