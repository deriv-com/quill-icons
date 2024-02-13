import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 5.375H1.5q-.352.023-.375.375V11q.023.352.375.375H9q.352-.023.375-.375V5.75Q9.352 5.398 9 5.375M1.5 12.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 11V5.75q.024-.632.445-1.055.423-.421 1.055-.445H9q.633.024 1.055.445.421.423.445 1.055V11a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H6.96l.376 1.125h1.101q.516.047.563.563-.047.514-.562.562H2.062q-.514-.047-.562-.562.047-.516.563-.563h1.101L3.54 12.5zm2.836 1.125h1.828L5.79 12.5H4.711zm8.039-8.25v.75h1.5v-.75zm0 1.875V8h1.5v-.75zm1.5 1.875h-1.5v4.5h1.5zm-2.625-3.75q.024-.468.328-.797.329-.304.797-.328h1.5q.469.024.797.328.304.328.328.797v8.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-1.5a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm1.875 6.563q-.516-.048-.562-.563.045-.516.562-.562.515.045.563.562-.048.515-.563.563' />
    </g>
    <defs>
      <clipPath id='fad276f1f5072a675307ef1f686ee23f__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerCaptionBoldIcon);
export default ForwardRef;
