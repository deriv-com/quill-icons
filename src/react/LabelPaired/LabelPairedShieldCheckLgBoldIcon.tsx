import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckLgBoldIcon = (
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
      <path d='M2.852 10.46q-.352.196-.352.509 0 1.836.625 4.219.625 2.343 2.188 4.609 1.601 2.226 4.453 3.672a.72.72 0 0 0 .468 0q2.852-1.446 4.454-3.672 1.562-2.265 2.187-4.61.625-2.382.625-4.218 0-.313-.352-.508L10 7.414zM17.89 8.743q.663.273 1.054.86.43.585.43 1.367.04 1.992-.664 4.687-.703 2.696-2.54 5.235-1.796 2.578-5.155 4.257a2.32 2.32 0 0 1-2.032 0q-3.36-1.68-5.156-4.257-1.836-2.54-2.539-5.235T.625 10.97q0-.782.43-1.367.39-.587 1.054-.86l7.383-3.125A1.1 1.1 0 0 1 10 5.5q.274 0 .508.117zm-5.703 4.883q-.08 1.368-1.25 1.992v2.695q-.079.86-.938.938-.86-.078-.937-.937v-2.696q-1.173-.625-1.25-1.992.039-.938.625-1.562.624-.587 1.562-.626.938.04 1.563.626.585.624.624 1.562' />
    </g>
    <defs>
      <clipPath id='a6f1d49f775e7f029c7f1402e76dd5fa__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckLgBoldIcon);
export default ForwardRef;
