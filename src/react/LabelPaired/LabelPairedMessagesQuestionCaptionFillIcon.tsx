import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionCaptionFillIcon = (
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
      <path d='M0 5c0-.82.656-1.5 1.5-1.5h6.75c.82 0 1.5.68 1.5 1.5v4.5c0 .844-.68 1.5-1.5 1.5H4.734l-1.898 1.43c-.117.093-.258.093-.398.047a.39.39 0 0 1-.188-.352V11H1.5A1.48 1.48 0 0 1 0 9.5zm6 6.75h2.25A2.25 2.25 0 0 0 10.5 9.5v-3h3c.82 0 1.5.68 1.5 1.5v4.5c0 .844-.68 1.5-1.5 1.5h-.75v1.125a.4.4 0 0 1-.21.352c-.142.046-.282.046-.4-.047L10.243 14H7.5A1.48 1.48 0 0 1 6 12.5zM3.188 5.68l-.024.023c-.07.234.047.516.305.586.234.094.492-.023.586-.281v-.024c.023-.07.093-.093.164-.093h1.125c.164 0 .304.117.304.28 0 .118-.07.212-.14.259l-.867.515c-.164.07-.235.235-.235.399v.258c0 .257.211.468.469.468.234 0 .445-.21.469-.468l.61-.352c.398-.21.632-.633.632-1.078a1.23 1.23 0 0 0-1.242-1.219H4.219c-.469 0-.89.281-1.032.727m2.296 3.633a.59.59 0 0 0-.304-.563.61.61 0 0 0-.633 0 .59.59 0 0 0-.305.563.6.6 0 0 0 .305.585.61.61 0 0 0 .633 0 .6.6 0 0 0 .304-.585' />
    </g>
    <defs>
      <clipPath id='27fd502c76707a93b6f690c4fd6db89e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionCaptionFillIcon);
export default ForwardRef;
