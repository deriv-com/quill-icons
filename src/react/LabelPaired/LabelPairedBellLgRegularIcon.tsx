import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.375 6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.664C12.75 7.102 15.25 9.758 15.25 13v1.172c0 1.68.664 3.32 1.875 4.531l.117.117c.313.313.508.782.508 1.211a1.75 1.75 0 0 1-1.758 1.758H1.97C.992 21.75.25 21.008.25 20.031c0-.468.156-.898.508-1.21l.078-.118c1.21-1.21 1.914-2.851 1.914-4.531V13a6.237 6.237 0 0 1 5.625-6.21zM9 8c-2.773 0-5 2.266-5 5v1.172c0 2.031-.82 3.984-2.266 5.43l-.117.078a.63.63 0 0 0-.117.351c0 .274.195.469.469.469h14.023c.274 0 .508-.195.508-.469 0-.117-.078-.234-.156-.351l-.117-.078a7.71 7.71 0 0 1-2.266-5.47V13c0-2.734-2.227-5-5-5zM7.79 23.43c.194.508.663.82 1.21.82.508 0 .977-.312 1.172-.82.117-.313.469-.508.781-.39a.655.655 0 0 1 .39.82A2.49 2.49 0 0 1 9 25.5c-1.094 0-2.031-.664-2.383-1.64a.654.654 0 0 1 .39-.82c.313-.118.665.077.782.39' />
    </g>
    <defs>
      <clipPath id='570c6f0292d7e618691931d48ea33f72__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellLgRegularIcon);
export default ForwardRef;
