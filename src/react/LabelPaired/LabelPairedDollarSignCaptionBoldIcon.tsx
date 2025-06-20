import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignCaptionBoldIcon = (
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
      <path d='M4.563 4.063v1.171c.632.07 1.218.188 1.664.282a.565.565 0 1 1-.258 1.101c-.727-.164-1.782-.375-2.672-.281q-.668.035-1.055.281a1.08 1.08 0 0 0-.469.727c-.07.258-.023.445.047.562.047.14.188.258.399.399.445.28 1.125.445 1.898.656l.07.023c.727.188 1.547.399 2.18.774.328.187.61.469.797.844.211.375.234.82.164 1.289-.164.843-.773 1.382-1.523 1.664-.375.14-.797.234-1.242.258v1.124A.555.555 0 0 1 4 15.5a.54.54 0 0 1-.562-.562v-1.149c-.094-.023-.165-.023-.235-.047-.586-.07-1.617-.305-2.25-.586-.281-.14-.422-.469-.281-.75.117-.281.445-.398.726-.281.516.21 1.43.445 1.946.516.844.117 1.547.046 2.062-.141.492-.187.75-.469.797-.82.07-.258.024-.446-.047-.563-.047-.14-.187-.281-.398-.398-.445-.281-1.102-.469-1.899-.656l-.07-.024c-.727-.187-1.547-.398-2.18-.773-.304-.211-.609-.47-.796-.844a2 2 0 0 1-.141-1.29c.117-.679.469-1.148.96-1.452.47-.305 1.032-.422 1.571-.47.07-.022.14-.022.235-.022V4.063c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563' />
    </g>
    <defs>
      <clipPath id='635c1183bbe7e21d64616d68eddffec7__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignCaptionBoldIcon);
export default ForwardRef;
