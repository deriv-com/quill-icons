import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.156 5.797c.985.984 1.594 2.273 1.594 3.68 0 2.859-2.39 5.203-5.273 5.203-.868 0-1.711-.235-2.485-.633L.25 14.75l.727-2.695a5.2 5.2 0 0 1-.704-2.602c0-2.86 2.344-5.203 5.204-5.203a5.12 5.12 0 0 1 3.68 1.547m-3.68 7.992c2.391 0 4.383-1.945 4.383-4.312 0-1.172-.492-2.25-1.312-3.07A4.27 4.27 0 0 0 5.5 5.14c-2.39 0-4.336 1.945-4.336 4.312 0 .82.234 1.617.656 2.32l.117.165-.445 1.593 1.64-.445.141.094c.68.398 1.43.61 2.204.61m2.391-3.234c.117.07.211.093.235.164.046.047.046.304-.07.61-.118.304-.634.585-.868.608-.422.07-.75.047-1.57-.328-1.313-.562-2.157-1.875-2.227-1.945-.07-.094-.515-.703-.515-1.36 0-.632.328-.937.445-1.077a.44.44 0 0 1 .351-.165h.235c.094 0 .187-.023.305.235.093.258.375.89.398.96.023.071.047.141 0 .235-.234.492-.516.469-.375.703.516.867 1.008 1.172 1.781 1.547.117.07.188.047.281-.023.07-.094.329-.399.399-.516.094-.14.187-.117.305-.07s.75.351.89.422' />
    </g>
    <defs>
      <clipPath id='3b0080ceabd1a7d5414245957d6dbdd6__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappCaptionIcon);
export default ForwardRef;
