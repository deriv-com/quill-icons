import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.383 8.547-4.18 8.828H10V11.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v5.625h1.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H12.5V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-3.125H1.25c-.43 0-.86-.195-1.094-.547-.195-.39-.234-.82-.039-1.21l5-10.626c.274-.625 1.016-.898 1.64-.625.626.313.9 1.055.626 1.68' />
    </g>
    <defs>
      <clipPath id='00a7d691c3037ffdded0b663ff77f20b__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgFillIcon);
export default ForwardRef;
