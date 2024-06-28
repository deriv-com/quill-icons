import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnLgRegularIcon = (
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
      <path d='M23.672 5.852a.64.64 0 0 1-.274.859l-2.5 1.25c-.312.156-.703 0-.859-.274a.64.64 0 0 1 .273-.859l2.5-1.25a.64.64 0 0 1 .86.274m-11.797.273c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.664C16.25 7.102 18.75 9.758 18.75 13v1.172c0 1.68.664 3.32 1.875 4.531l.117.117c.313.313.508.782.508 1.211a1.75 1.75 0 0 1-1.758 1.758H5.47c-.977-.039-1.719-.781-1.719-1.758 0-.468.156-.898.508-1.21l.078-.118a6.48 6.48 0 0 0 1.914-4.57V13a6.237 6.237 0 0 1 5.625-6.21zM12.5 8c-2.773 0-5 2.266-5 5v1.172c0 2.031-.82 3.984-2.266 5.43l-.117.117c-.078.078-.156.195-.156.312 0 .274.234.508.508.508h14.023a.517.517 0 0 0 .508-.508c0-.117-.078-.234-.156-.312l-.117-.117a7.7 7.7 0 0 1-2.266-5.43V13c0-2.734-2.227-5-5-5zm-1.21 15.43c.194.508.663.82 1.21.82.508 0 .977-.312 1.172-.82.117-.313.469-.508.781-.39a.655.655 0 0 1 .39.82A2.49 2.49 0 0 1 12.5 25.5c-1.094 0-2.031-.664-2.383-1.64a.654.654 0 0 1 .39-.82c.313-.118.665.077.782.39M0 12.375c0-.312.273-.625.625-.625H3.75c.313 0 .625.313.625.625A.64.64 0 0 1 3.75 13H.625A.617.617 0 0 1 0 12.375m21.25-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H21.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M1.563 6.71a.64.64 0 0 1-.274-.858.64.64 0 0 1 .86-.274l2.5 1.25c.312.156.43.547.273.86-.156.273-.547.43-.86.273z' />
    </g>
    <defs>
      <clipPath id='c11c5bee308b7a113bafb7db03102a09__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnLgRegularIcon);
export default ForwardRef;
