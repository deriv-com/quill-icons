import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.094 18.938c-1.188.343-2.438-.375-2.781-1.563l-.157-.625a2.9 2.9 0 0 0-.625-1.094l-1.593-1.75a.774.774 0 0 1 .03-1.062.747.747 0 0 1 1.063.062l1.625 1.75c.438.469.75 1.063.938 1.688l.156.625a.78.78 0 0 0 .938.531.78.78 0 0 0 .53-.937l-.187-.625a6 6 0 0 0-.844-1.75c-.156-.22-.156-.532-.03-.782A.73.73 0 0 1 9.812 13H14c.25 0 .5-.219.5-.5 0-.187-.156-.375-.344-.469-.219-.062-.406-.281-.469-.5-.062-.25 0-.5.188-.687.063-.094.125-.188.125-.344a.5.5 0 0 0-.406-.469c-.281-.062-.5-.25-.563-.469a.8.8 0 0 1 .094-.75.48.48 0 0 0 .125-.312c0-.187-.156-.375-.344-.469-.344-.125-.531-.5-.437-.875 0-.062.031-.093.031-.156 0-.25-.25-.5-.5-.5H8.938c-.407 0-.782.125-1.094.344L5.906 8.125a.7.7 0 0 1-1.031-.219c-.25-.343-.156-.781.188-1.031L7 5.594A3.54 3.54 0 0 1 8.938 5H12c1.063 0 1.938.875 2 1.938.438.375.75.937.75 1.562 0 .156-.031.281-.062.406a1.97 1.97 0 0 1 .718 2.188c.344.375.594.875.594 1.406 0 1.125-.906 2-2 2h-2.906q.234.516.375 1.031l.187.625a2.243 2.243 0 0 1-1.562 2.782M1 16c-.562 0-1-.437-1-1V8c0-.531.438-1 1-1h2c.531 0 1 .469 1 1v7c0 .563-.469 1-1 1z' />
    </g>
    <defs>
      <clipPath id='25b25c92386f41b34dfb9c76dece9703__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownMdBoldIcon);
export default ForwardRef;
