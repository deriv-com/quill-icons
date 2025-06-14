import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.766 6.43c1.148 1.148 1.859 2.652 1.859 4.293 0 3.336-2.79 6.07-6.152 6.07-1.012 0-1.996-.273-2.899-.738l-3.199.82.848-3.145a6.1 6.1 0 0 1-.82-3.035c0-3.336 2.734-6.07 6.07-6.07 1.64 0 3.172.656 4.293 1.805m-4.293 9.324c2.789 0 5.113-2.27 5.113-5.031 0-1.368-.574-2.625-1.531-3.582A4.99 4.99 0 0 0 6.5 5.664c-2.79 0-5.059 2.27-5.059 5.031 0 .957.274 1.887.766 2.707l.137.192-.52 1.86 1.914-.52.164.109c.793.465 1.668.71 2.57.71m2.789-3.774c.136.082.246.11.273.192.055.055.055.355-.082.71-.137.356-.738.684-1.012.712-.492.082-.875.054-1.832-.383-1.53-.656-2.515-2.188-2.597-2.27-.082-.109-.602-.82-.602-1.586 0-.738.383-1.093.52-1.257a.51.51 0 0 1 .41-.192h.273c.11 0 .219-.027.356.274.11.3.437 1.039.465 1.12.027.083.054.165 0 .274-.274.574-.602.547-.438.82.602 1.012 1.176 1.368 2.078 1.805.137.082.219.055.328-.027.082-.11.383-.465.465-.602.11-.164.219-.136.356-.082s.875.41 1.039.492' />
    </g>
    <defs>
      <clipPath id='a5ba363d9b4cc2e40e6eaaded6219eff__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappSmIcon);
export default ForwardRef;
