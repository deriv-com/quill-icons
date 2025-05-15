import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 4.625V8h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H9.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H10V5.164l-.633.211c-.21.047-.422-.047-.492-.258a.39.39 0 0 1 .258-.469l1.125-.375c.094-.023.234-.023.328.047a.4.4 0 0 1 .164.305m-6.492-.258 2.25 2.25c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L4.376 5.538v8.836c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V5.539L2.008 7.156a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.25-2.25c.141-.14.4-.14.54 0m6.023 8.32c.422 0 .82-.21 1.055-.609.21-.375.21-.82 0-1.219a1.26 1.26 0 0 0-1.055-.609c-.445 0-.844.234-1.078.61-.21.398-.21.843 0 1.218.235.399.633.61 1.078.61M8.312 11.47c0-1.078.868-1.969 1.97-1.969a1.98 1.98 0 0 1 1.968 1.969c0 .047 0 .07-.023.094h.023c0 .515-.187.984-.516 1.359l-1.453 1.71c-.14.165-.375.165-.539.048-.164-.14-.164-.375-.047-.54l.61-.703h-.024a1.95 1.95 0 0 1-1.969-1.968' />
    </g>
    <defs>
      <clipPath id='c49e8fcec329e7f6241224ce817d3e6e__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineCaptionRegularIcon);
export default ForwardRef;
