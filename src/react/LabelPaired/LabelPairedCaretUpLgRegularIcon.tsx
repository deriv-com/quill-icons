import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpLgRegularIcon = (
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
      <path d='m6.266 11.867-4.688 4.414c-.078.078-.078.117-.078.196 0 .156.117.273.273.273h9.414c.157 0 .313-.117.313-.273a.22.22 0 0 0-.117-.196l-4.688-4.414a.22.22 0 0 0-.195-.117q-.175 0-.234.117m-.86-.937c.274-.274.664-.43 1.094-.43.39 0 .781.156 1.055.43l4.687 4.453c.313.273.508.703.508 1.094 0 .859-.703 1.523-1.562 1.523H1.773C.914 18 .25 17.336.25 16.477c0-.391.156-.82.469-1.094z' />
    </g>
    <defs>
      <clipPath id='13eb82f45622c5327ac546334d37cfca__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpLgRegularIcon);
export default ForwardRef;
