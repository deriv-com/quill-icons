import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.871 9.3c-.164.466-.683.712-1.121.548a.875.875 0 0 1-.547-1.121 6.2 6.2 0 0 1 1.45-2.297 6.156 6.156 0 0 1 8.667 0l.465.492v-.984a.9.9 0 0 1 .875-.875c.492 0 .875.41.875.875V9a.864.864 0 0 1-.875.875H9.625A.864.864 0 0 1 8.75 9c0-.465.383-.875.875-.875h.93l-.465-.465a4.423 4.423 0 0 0-6.207 0c-.465.492-.82 1.04-1.012 1.64m-1.805 2.38c.028-.028.082-.028.11-.028.054 0 .082-.027.137-.027h3.062a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.957l.465.492a4.423 4.423 0 0 0 6.207 0c.465-.492.82-1.039 1.012-1.64.164-.465.683-.711 1.12-.547.466.164.712.656.548 1.12-.301.848-.793 1.614-1.45 2.298a6.156 6.156 0 0 1-8.668 0l-.465-.493v.957c0 .493-.41.876-.874.876a.864.864 0 0 1-.875-.875V12.39c0-.055 0-.082.027-.11a.8.8 0 0 1 .219-.383.8.8 0 0 1 .382-.218' />
    </g>
    <defs>
      <clipPath id='01b4362ed73d4aff5704a7ed2962658f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateSmFillIcon);
export default ForwardRef;
