import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.188 28.36q-1.407.375-2.579-.282-1.17-.656-1.593-2.015l-.282-.938a4.4 4.4 0 0 0-.89-1.64l-2.438-2.672q-.61-.798.094-1.547.844-.657 1.594.047l2.39 2.671a6.3 6.3 0 0 1 1.407 2.532l.28.937q.376.937 1.407.75.938-.375.75-1.406l-.281-.938a7.8 7.8 0 0 0-1.219-2.578q-.375-.562-.094-1.172.329-.562.985-.609H21q.704-.046.75-.75-.046-.516-.469-.703-.563-.234-.703-.797a1.02 1.02 0 0 1 .235-.984.8.8 0 0 0 .187-.516q-.046-.609-.61-.75a1.14 1.14 0 0 1-.843-.703q-.188-.61.187-1.078a.76.76 0 0 0 .141-.469q-.046-.516-.469-.703-.89-.422-.703-1.36a.4.4 0 0 0 .047-.187q-.046-.703-.75-.75h-4.547a2.9 2.9 0 0 0-1.687.516l-2.907 1.922q-.89.468-1.546-.329-.516-.89.328-1.546L10.5 8.39a5.3 5.3 0 0 1 2.953-.891H18q1.266 0 2.11.844.843.797.89 2.062 1.079.844 1.125 2.344 0 .328-.047.61 1.124.843 1.172 2.39 0 .47-.14.89.843.844.89 2.11-.047 1.266-.89 2.11-.844.843-2.11.89h-4.312q.327.75.562 1.5l.234.938q.375 1.405-.28 2.578-.657 1.17-2.017 1.593M1.5 24q-.656 0-1.078-.422Q0 23.157 0 22.5V12q0-.656.422-1.078Q.843 10.5 1.5 10.5h3q.657 0 1.078.422Q6 11.343 6 12v10.5q0 .657-.422 1.078Q5.157 24 4.5 24z' />
    </g>
    <defs>
      <clipPath id='fada413d852666355f5c705d95d79369__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownXlBoldIcon);
export default ForwardRef;
