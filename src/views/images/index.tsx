import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { ProfileProps, ImagesType } from '../profile/interface/interface';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Modal from 'react-modal';

import { RiCloseCircleFill } from 'react-icons/ri';

import ButtonNavigation from '../../components/button-navigation/index';

import { resources } from '../../data';

import Anime from '../../assets/images/img.jpg';

Modal.setAppElement('#root');

const Index: React.FC = () => {
  const [images, setImages] = useState<ImagesType[]>([]);
  const [ximg1, setXimg1] = useState<ImagesType[]>([]);
  const [ximg2, setXimg2] = useState<ImagesType[]>([]);
  const [ximg3, setXimg3] = useState<ImagesType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [onPreview, setOnPreview] = useState<ImagesType>();

  const JsonDataImageDivider = (dataprofile: ProfileProps) => {
    const data = dataprofile;
    let current: 'ximg1' | 'ximg2' | 'ximg3' = 'ximg1';
    data.images?.map((image) => {
      if (current === 'ximg1') {
        current = 'ximg2';
        return setXimg1((ximg1) => [
          ...ximg1,
          {
            title: image.title,
            light: image.light,
            url: image.url,
          },
        ]);
      }
      if (current === 'ximg2') {
        current = 'ximg3';
        return setXimg2((ximg2) => [
          ...ximg2,
          {
            title: image.title,
            light: image.light,
            url: image.url,
          },
        ]);
      }
      if (current === 'ximg3') {
        current = 'ximg1';
        return setXimg3((ximg3) => [
          ...ximg3,
          {
            title: image.title,
            light: image.light,
            url: image.url,
          },
        ]);
      }
      return null;
    });
  };

  const modalPreviewHandler = (image: ImagesType): void => {
    setOnPreview(image);
    setModalOpen(true);
  };

  useEffect(() => {
    Axios.get(resources).then((res) => {
      JsonDataImageDivider(res.data);
      setImages(res.data.images);
    });
  }, []);

  return (
    <div className="images-container">
      <div className="gallery">
        <div className="divide-gallery-3">
          {ximg1.map((image, index) => (
            <div
              key={index}
              className="ximg"
              onClick={() => modalPreviewHandler(image)}
            >
              <LazyLoadImage
                effect="blur"
                src={image.light}
                alt={image.title}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="divide-gallery-2">
          {ximg2.map((image, index) => (
            <div
              key={index}
              className="ximg"
              onClick={() => modalPreviewHandler(image)}
            >
              <LazyLoadImage
                effect="blur"
                src={image.light}
                alt={image.title}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="divide-gallery-1">
          {ximg3.map((image, index) => (
            <div
              key={index}
              className="ximg"
              onClick={() => modalPreviewHandler(image)}
            >
              <LazyLoadImage
                effect="blur"
                src={image.light}
                alt={image.title}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        contentLabel="Image Modal"
        className="modal-image"
        overlayClassName="modal-image-overlay"
      >
        <div className="title-bar">
          <span className="title">{onPreview?.title}</span>
          <button className="icon" onClick={() => setModalOpen(false)}>
            <RiCloseCircleFill
              size={35}
              fill="#E25568"
              style={{ verticalAlign: 'middle' }}
            />
          </button>
        </div>
        <div className="image-preview">
          <LazyLoadImage
            src={onPreview?.light}
            width="100%"
            height="100%"
            alt="full-resolution-preview"
            draggable={false}
          />
        </div>
        <div className="image-list">
          {images.map((image) => (
            <button
              className={'image-box'.concat(
                onPreview?.url === image.url ? ' active' : ''
              )}
              onClick={() => modalPreviewHandler(image)}
            >
              <LazyLoadImage
                src={image.light}
                alt={image.title + '_alt'}
                width="100%"
                height="100%"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </Modal>
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            {
              url: '/suarasiy/profile',
              label: 'Profile',
              state: 'previous',
            },
            {
              url: '/suarasiy/music',
              label: 'Music',
              state: 'next',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
