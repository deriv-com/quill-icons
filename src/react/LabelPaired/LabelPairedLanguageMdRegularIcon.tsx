import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 7H2c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h7.5zm1 0v10H18c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1zM20 8v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2h16c1.094 0 2 .906 2 2M5.438 9.344l2 5c.125.25 0 .531-.282.625-.25.125-.531 0-.625-.281l-.281-.657H3.719l-.281.656c-.094.282-.376.407-.626.282-.28-.094-.406-.375-.28-.625l2-5A.47.47 0 0 1 5 9a.46.46 0 0 1 .438.344M5 10.875 4.125 13h1.719zM15.5 9.5v.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-.156l-.125.375a6.2 6.2 0 0 1-1.375 2.156c.094.063.187.125.312.188l.594.375a.494.494 0 0 1 .156.687.494.494 0 0 1-.687.156l-.594-.343c-.187-.125-.375-.25-.562-.406-.25.187-.532.343-.813.5l-.531.28c-.25.126-.563 0-.688-.25-.125-.218 0-.53.219-.655l.563-.282c.156-.062.312-.156.468-.25l-.656-.656c-.187-.219-.187-.531 0-.719.219-.187.531-.187.719 0l.719.719c.53-.5.937-1.125 1.218-1.844V11H12.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2v-.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='c2723c1ca12ad1b7a6a7c7209d48bfef__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageMdRegularIcon);
export default ForwardRef;
