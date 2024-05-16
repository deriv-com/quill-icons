import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsLgRegularIcon = (
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
      <path d='M19.844 22.805c-.235.273-.625.273-.899.078l-5.937-5.078c-.274-.196-.274-.625-.078-.86a.63.63 0 0 1 .898-.078l5.938 5.04c.273.234.273.624.078.898m-8.633-8.086 7.734-6.563c.274-.195.664-.195.899.078.195.274.195.664-.078.899L8.125 18.938a4.2 4.2 0 0 1 .625 2.187c0 2.422-1.992 4.375-4.375 4.375A4.37 4.37 0 0 1 0 21.125c0-2.383 1.953-4.375 4.375-4.375 1.133 0 2.188.469 2.969 1.21l2.89-2.46-2.89-2.422a4.3 4.3 0 0 1-2.969 1.172A4.37 4.37 0 0 1 0 9.875C0 7.492 1.953 5.5 4.375 5.5c2.383 0 4.375 1.992 4.375 4.414a4.2 4.2 0 0 1-.625 2.188zM4.375 13c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.126C6.484 7.376 5.47 6.75 4.375 6.75c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.124A3.16 3.16 0 0 0 4.375 13m0 5c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.125a3.16 3.16 0 0 0 2.734 1.562c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.125C6.484 18.625 5.47 18 4.375 18' />
    </g>
    <defs>
      <clipPath id='fa58873ddd1cceeffaad6eb850b4715e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsLgRegularIcon);
export default ForwardRef;
