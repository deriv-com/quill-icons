import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.375 3.875v1.148c.727.07 1.453.211 1.945.352a.36.36 0 0 1 .282.445.36.36 0 0 1-.446.282c-.773-.188-1.922-.422-2.906-.329-.492.047-.937.165-1.242.352-.305.21-.516.492-.61.96-.07.33-.023.587.07.774.095.211.259.375.516.54.516.328 1.266.515 2.11.75h.023c.797.21 1.664.445 2.297.843.328.211.61.469.774.82q.28.563.14 1.266c-.164.797-.726 1.336-1.476 1.64-.422.165-.938.259-1.477.282v1.125A.37.37 0 0 1 4 15.5a.37.37 0 0 1-.375-.375v-1.148c-.14-.024-.305-.024-.445-.047-.61-.094-1.547-.305-2.344-.657-.188-.07-.258-.304-.188-.492.094-.187.305-.281.493-.187.703.304 1.57.492 2.132.586.914.14 1.711.07 2.297-.164s.914-.586 1.008-1.078c.07-.352.024-.586-.07-.797a1.2 1.2 0 0 0-.516-.516c-.515-.328-1.265-.54-2.086-.75l-.047-.023c-.796-.188-1.664-.422-2.273-.82a2.3 2.3 0 0 1-.797-.844Q.544 7.66.65 6.922c.14-.656.468-1.102.937-1.43.469-.281 1.031-.422 1.594-.469C3.32 5 3.46 5 3.625 5V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='38f4396427d7642d25dc4374cd9eb4f9__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignCaptionRegularIcon);
export default ForwardRef;
