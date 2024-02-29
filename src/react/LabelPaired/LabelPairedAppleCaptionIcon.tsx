import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.477 9.805q-.048.14.164.843.21.727 1.265 1.313a7 7 0 0 1-.492 1.101 5.6 5.6 0 0 1-.844 1.149q-.492.492-1.054.539a2.1 2.1 0 0 1-.844-.21 2.5 2.5 0 0 0-.961-.212q-.586.024-1.008.235-.375.163-.75.187-.586-.024-1.101-.562a5.8 5.8 0 0 1-.891-1.22 10 10 0 0 1-.54-1.148 6 6 0 0 1-.327-1.898Q.14 8.352.96 7.578q.796-.774 1.828-.797.585.047 1.148.282.399.163.657.187.187-.024.562-.164.305-.117.703-.234.4-.118.797-.094 1.313.117 1.992 1.055-1.195.702-1.171 1.992M6.14 5.96q-.704.82-1.618.797-.045-.984.586-1.688.306-.327.727-.562.446-.234.867-.258.047.211-.023.656-.094.469-.54 1.055' />
    </g>
    <defs>
      <clipPath id='258de11d4e6dcd0f29af38f7b96db707__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleCaptionIcon);
export default ForwardRef;
