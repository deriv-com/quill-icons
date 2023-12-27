import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedAppleCaptionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M7.477 9.805c-.032.093.023.375.164.843.14.485.562.922 1.265 1.313a6.753 6.753 0 0 1-.492 1.101 5.578 5.578 0 0 1-.844 1.149c-.328.328-.68.508-1.054.539a2.1 2.1 0 0 1-.844-.21 2.492 2.492 0 0 0-.961-.212c-.39.016-.727.094-1.008.235-.25.109-.5.171-.75.187-.39-.016-.758-.203-1.101-.563A5.823 5.823 0 0 1 .96 12.97a9.738 9.738 0 0 1-.54-1.149 5.993 5.993 0 0 1-.327-1.898c.031-1.047.32-1.828.867-2.344.531-.516 1.14-.781 1.828-.797.39.032.773.125 1.148.282.266.109.485.171.657.187.125-.016.312-.07.562-.164.203-.078.438-.156.703-.234.266-.079.532-.11.797-.094.875.078 1.54.43 1.992 1.054-.796.47-1.187 1.133-1.171 1.993ZM6.14 5.96c-.47.547-1.008.812-1.618.797-.03-.656.165-1.219.586-1.688.204-.218.446-.406.727-.562.297-.156.586-.242.867-.258.031.14.024.36-.023.656-.063.313-.242.664-.54 1.055Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleCaptionIcon);
export default ForwardRef;
